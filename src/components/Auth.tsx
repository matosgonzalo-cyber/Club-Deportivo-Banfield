import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, handleFirestoreError, OperationType } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { LogIn, LogOut, UserCircle, ShieldCheck, Users, GraduationCap, UserPlus } from 'lucide-react';
import { motion } from 'motion/react';

const provider = new GoogleAuthProvider();

export const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      if (error.code !== 'auth/cancelled-popup-request') {
        console.error("Login failed:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center bg-surface rounded-3xl shadow-sm border border-border">
      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        <LogIn className="w-10 h-10 text-primary" />
      </div>
      <h2 className="text-3xl font-headline font-bold mb-4">Bienvenido al Club</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Inicia sesión para acceder a tu panel personalizado según tu rol en el club.
      </p>
      <button
        onClick={handleLogin}
        disabled={loading}
        className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
        ) : (
          <img src="https://www.google.com/favicon.ico" className="w-5 h-5 bg-white rounded-full p-0.5" alt="Google" />
        )}
        {loading ? 'Iniciando sesión...' : 'Continuar con Google'}
      </button>
    </div>
  );
};

export const RoleSelection: React.FC = () => {
  const { user } = useAuth();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const roles = [
    { id: 'jugador', label: 'Jugador', icon: GraduationCap, description: 'Accede a tus estadísticas y entrenamientos.' },
    { id: 'tecnico', label: 'Técnico', icon: ShieldCheck, description: 'Gestiona la plantilla y tácticas del equipo.' },
    { id: 'administrativo', label: 'Administrativo', icon: ShieldCheck, description: 'Control de pagos y gestión del club.' },
    { id: 'socio', label: 'Socio', icon: Users, description: 'Beneficios exclusivos y noticias del club.' },
    { id: 'padre', label: 'Padre', icon: UserPlus, description: 'Seguimiento de la actividad de tus hijos.' },
  ];

  const handleRoleSelect = async () => {
    if (!user || !selectedRole) return;
    setLoading(true);
    const path = `users/${user.uid}`;
    try {
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        role: selectedRole,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-headline font-bold mb-2 text-center">Selecciona tu Rol</h2>
      <p className="text-muted-foreground text-center mb-12">
        Para personalizar tu experiencia, necesitamos saber cuál es tu función en el club.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {roles.map((role) => (
          <motion.button
            key={role.id}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedRole(role.id)}
            className={`p-6 rounded-3xl border-2 text-left transition-all ${
              selectedRole === role.id 
                ? 'border-primary bg-primary/5 shadow-lg' 
                : 'border-border bg-surface hover:border-primary/30'
            }`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
              selectedRole === role.id ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
            }`}>
              <role.icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">{role.label}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {role.description}
            </p>
          </motion.button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6">
        <button
          disabled={!selectedRole || loading}
          onClick={handleRoleSelect}
          className="bg-primary text-white px-12 py-4 rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-primary/20 transition-all active:scale-95 w-full max-w-xs"
        >
          {loading ? 'Guardando...' : 'Confirmar y Continuar'}
        </button>
        
        <button
          onClick={() => signOut(auth)}
          className="text-muted-foreground hover:text-destructive flex items-center gap-2 transition-colors font-medium"
        >
          <LogOut className="w-4 h-4" />
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export const UserMenu: React.FC = () => {
  const { user, role } = useAuth();

  if (!user) return null;

  return (
    <div className="flex items-center gap-4 bg-surface p-2 pr-4 rounded-full border border-border">
      {user.photoURL ? (
        <img src={user.photoURL} className="w-10 h-10 rounded-full border-2 border-primary/20" alt={user.displayName || ''} />
      ) : (
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <UserCircle className="w-6 h-6 text-primary" />
        </div>
      )}
      <div className="flex flex-col">
        <span className="text-sm font-bold leading-tight">{user.displayName}</span>
        <span className="text-[10px] uppercase tracking-wider text-primary font-bold">{role}</span>
      </div>
      <button 
        onClick={() => signOut(auth)}
        className="ml-2 p-2 text-muted-foreground hover:text-destructive transition-colors"
        title="Cerrar Sesión"
      >
        <LogOut className="w-5 h-5" />
      </button>
    </div>
  );
};
