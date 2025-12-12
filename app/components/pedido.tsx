"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Pedido() {
const [msgIndex, setMsgIndex] = useState(0);
const [gifIndex, setGifIndex] = useState(0);


const frases = [
"Por favor... 🥺",
"Sério, deixa eu falar com você 😢",
"Prometo que vai ser fofo 😿",
"É rapidinho... juro 😔",
"Clica vai... meu coração depende disso 💗"
];


const gifs = [
"/gif1.gif",
"/gif2.gif",
"/gif5.gif",
"/gif6.gif"
];


const handleNo = () => {
setMsgIndex((prev) => (prev + 1) % frases.length);
setGifIndex((prev) => (prev + 1) % gifs.length);
};


const handleYes = () => {
window.location.href = "/desculpas";
};


return (
<div className="flex flex-col items-center justify-center h-screen bg-pink-50 text-center px-4">
<motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
<Image
src={gifs[gifIndex]} // agora troca conforme o NÃO
width={250}
height={250}
alt="GIF fofinho"
className="rounded-2xl shadow-xl mb-6"
/>
</motion.div>


<motion.h1
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1 }}
className="text-3xl font-bold text-rose-600"
>
Eu fiquei com algo preso no coração…
</motion.h1>


<motion.h2
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1.2 }}
className="text-xl text-rose-500 mt-2"
>
Posso falar com você?
</motion.h2>


<div className="flex gap-4 mt-8">
<motion.button
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.95 }}
onClick={handleYes}
className="bg-green-500 text-white px-6 py-3 rounded-xl text-xl shadow-lg"
>
Sim 💗
</motion.button>


<motion.button
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.95 }}
onClick={handleNo}
className="bg-red-500 text-white px-6 py-3 rounded-xl text-xl shadow-lg max-w-[180px]"
>
{frases[msgIndex]}
</motion.button>
</div>
</div>
);
}