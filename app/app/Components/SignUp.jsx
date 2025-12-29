'use client'
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { X, Mail, Lock, User, UserPlus, Cpu, ShieldPlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SignUp = ({ signUp, setSignUp, setLogin }) => {
    const { RegisterUser } = useContext(AuthContext)
    const [user, setUser] = useState({ email: "", password: "", name: "" })

    const handleSubmit = (e) => {
        RegisterUser(user.email, user.password, user.name, e);
    }

    return (
        <AnimatePresence>
            {signUp && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-obsidian/80 backdrop-blur-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="glass-card w-full max-w-md p-10 rounded-3xl border border-white/10 relative overflow-hidden"
                    >
                        {/* Background decoration */}
                        <div className="absolute -top-12 -right-12 p-8 opacity-5">
                            <ShieldPlus size={160} />
                        </div>

                        <button
                            onClick={() => setSignUp(false)}
                            className="absolute top-6 right-6 p-2 rounded-xl hover:bg-white/5 transition-colors text-foreground/40 hover:text-white"
                        >
                            <X size={24} />
                        </button>

                        <div className="mb-10 text-center">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <Cpu className="text-electric-cobalt" size={24} />
                                <span className="font-display font-black text-xl tracking-tighter uppercase text-white">
                                    Sluch<span className="text-electric-cobalt">Bui</span>
                                </span>
                            </div>
                            <h2 className="text-2xl font-black font-display uppercase tracking-tight">Identity Creation</h2>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mt-2">Initialize Global Engineer Protocol</p>
                        </div>

                        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }} className="space-y-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Full Name</label>
                                <div className="flex items-center gap-3 glass px-4 py-2 border border-white/5 rounded-xl">
                                    <User size={18} className="text-foreground/40" />
                                    <input
                                        type="text"
                                        className="bg-transparent py-2 outline-none w-full text-sm font-bold placeholder:text-white/10"
                                        placeholder="ENG. JOHN DOE"
                                        value={user.name}
                                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Communication Node (Email)</label>
                                <div className="flex items-center gap-3 glass px-4 py-2 border border-white/5 rounded-xl">
                                    <Mail size={18} className="text-foreground/40" />
                                    <input
                                        type="email"
                                        className="bg-transparent py-2 outline-none w-full text-sm font-bold placeholder:text-white/10"
                                        placeholder="ENG_ID@PROVIDER.DOM"
                                        value={user.email}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Access Cipher</label>
                                <div className="flex items-center gap-3 glass px-4 py-2 border border-white/5 rounded-xl">
                                    <Lock size={18} className="text-foreground/40" />
                                    <input
                                        type="password"
                                        className="bg-transparent py-2 outline-none w-full text-sm font-bold placeholder:text-white/10"
                                        placeholder="••••••••"
                                        value={user.password}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn-premium w-full flex items-center justify-center gap-3 py-4 mt-6"
                            >
                                Initialize Entity <UserPlus size={18} />
                            </button>
                        </form>

                        <div className="mt-10 pt-8 border-t border-white/5 text-center">
                            <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">
                                Already registered?{" "}
                                <button
                                    onClick={() => { setSignUp(false); setLogin(true); }}
                                    className="text-electric-cobalt hover:text-white transition-colors ml-1"
                                >
                                    Access Terminal
                                </button>
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SignUp;

