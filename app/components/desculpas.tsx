"use client";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Desculpas() {
return (
<div className="flex flex-col items-center justify-center h-screen bg-rose-50 text-center px-6">


<motion.div
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
>
<Image
src="/foto-gorrinho.jpg" // mesma foto ou outra
width={280}
height={280}
alt="Vocês dois"
className="rounded-2xl shadow-xl mb-6"
/>
</motion.div>


<motion.h1
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className="text-3xl font-bold text-rose-600"
>
Eu quero te pedir desculpas.
</motion.h1>


<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1.2 }}
className="text-lg text-rose-500 max-w-xl mt-4"
>
Eu devia ter te defendido mais. Você não merecia ouvir aquilo.
Eu fiquei mal por não ter sido o cara que você precisava naquela hora.
<br /><br />
Eu nunca quero que você se sinta sozinha quando estiver comigo.
</motion.p>


<motion.h2
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1.3 }}
className="text-2xl text-rose-600 mt-6 font-semibold"
>
Eu quero proteger esse sorriso…
</motion.h2>


<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1.5 }}
className="text-lg text-rose-500"
>
…porque ele é uma das minhas coisas favoritas.
</motion.p>


<motion.a
href="/"
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
transition={{ duration: 0.3 }}
className="mt-8 bg-green-500 text-white px-6 py-3 rounded-xl text-xl shadow-lg"
>
Me deixa fazer melhor da próxima vez? 💞
</motion.a>


</div>
);
}