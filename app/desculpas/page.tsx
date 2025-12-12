"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Desculpas() {
const [step, setStep] = useState(0);


const gifs = ["/gif33.gif", "/gif34.gif", "/gif35.gif", "/gif36.gif"];
const next = () => setStep((s) => s + 1);


return (
<div className="flex flex-col items-center justify-center h-screen bg-rose-50 text-center px-6">
{step === 0 && (
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
<Image src={gifs[0]} width={260} height={260} alt="gif" className="rounded-2xl mb-6 shadow-xl mx-auto" />
<h1 className="text-3xl font-bold text-rose-600">Ei… posso te contar uma coisa? 😗</h1>
<motion.button onClick={next} whileHover={{ scale: 1.1 }} className="mt-6 bg-rose-500 text-white px-6 py-3 rounded-xl text-xl shadow-lg">Pode 💗</motion.button>
</motion.div>
)}


{step === 1 && (
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
<Image src={gifs[1]} width={240} height={240} alt="gif" className="rounded-2xl mb-6 shadow-xl mx-auto" />
<p className="text-lg text-rose-500 max-w-xl">Eu devia ter te defendido mais… e eu fiquei mal com isso.</p>
<motion.button onClick={next} whileHover={{ scale: 1.1 }} className="mt-6 bg-rose-500 text-white px-6 py-3 rounded-xl text-xl shadow-lg">Continua 😢</motion.button>
</motion.div>
)}


{step === 2 && (
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
<Image src={gifs[2]} width={240} height={240} alt="gif" className="rounded-2xl mb-6 shadow-xl mx-auto" />
<p className="text-lg text-rose-500 max-w-xl">Prometo que vou ser melhor. Mas deixa eu te perguntar uma coisa importante…</p>
<motion.button onClick={next} whileHover={{ scale: 1.1 }} className="mt-6 bg-purple-500 text-white px-6 py-3 rounded-xl text-xl shadow-lg">Pergunta 👀</motion.button>
</motion.div>
)}


{step === 3 && (
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
<Image src={gifs[3]} width={230} height={230} alt="gif" className="rounded-2xl mb-6 shadow-xl mx-auto" />
<p className="text-lg text-rose-500 max-w-xl">Você ainda deixa eu cuidar de você… e proteger aquele seu sorriso lindo? 😣💗</p>
<div className="flex gap-4 justify-center mt-6">
<motion.a href="#" onClick={() => setStep(4)} whileHover={{ scale: 1.1 }} className="bg-green-500 text-white px-6 py-3 rounded-xl text-xl shadow-lg">Sim 💞</motion.a>
<motion.button whileHover={{ scale: 1.1 }} onClick={() => alert("Então vou ter que te convencer… 😏💗")} className="bg-red-500 text-white px-6 py-3 rounded-xl text-xl shadow-lg">Não 😳</motion.button>
</div>
</motion.div>
)}


{step === 4 && (
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
<Image src="/foto-gorrinho.jpg" width={260} height={260} alt="vocês" className="rounded-2xl mb-6 shadow-xl mx-auto" />
<h1 className="text-3xl font-bold text-rose-600">Obrigado por confiar em mim… 💗</h1>
<p className="text-lg text-rose-500 max-w-xl mt-4">Eu prometo que da próxima vez eu vou estar do seu lado sem hesitar.<br/>Você merece ser cuidada, respeitada e protegida.</p>
<motion.a href="/" whileHover={{ scale: 1.1 }} className="mt-8 bg-green-600 text-white px-6 py-3 rounded-xl text-xl shadow-lg">💘</motion.a>
</motion.div>
)}
</div>
);
}