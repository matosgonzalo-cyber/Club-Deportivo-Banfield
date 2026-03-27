import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let displayMessage = "Lo sentimos, ha ocurrido un error inesperado.";
      
      try {
        // Try to parse Firestore error info
        if (this.state.error?.message) {
          const errorData = JSON.parse(this.state.error.message);
          if (errorData.error && errorData.operationType) {
            displayMessage = `Error de base de datos: ${errorData.error} (Operación: ${errorData.operationType})`;
          }
        }
      } catch {
        // Not a JSON error message, use default or raw message
        if (this.state.error?.message.includes('Missing or insufficient permissions')) {
          displayMessage = "No tienes permisos suficientes para realizar esta acción o ver este contenido.";
        }
      }

      return (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center bg-destructive/5 rounded-3xl border border-destructive/20 m-4">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-destructive text-3xl">error</span>
          </div>
          <h2 className="text-2xl font-headline font-bold text-destructive mb-2">¡Ups! Algo salió mal</h2>
          <p className="text-muted-foreground max-w-md mb-6">
            {displayMessage}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-primary/90 transition-all"
          >
            Reintentar
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
