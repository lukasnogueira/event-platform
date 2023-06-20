import { Logo } from "../components/Logo"

export function Subscribe() {



    return (
        <div className='min-h-screen bg-blur bg-no-repeat bg-cover flex flex-col items-center'>
            <div className="max-w-[1100px] min-w- flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        construa uma <strong className="text-blue-400">aplicação completa</strong>, do zero, com <strong className="text-blue-400">React JS</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div>
                    <h1>
                        Inscreva-se gratuitamente
                    </h1>
                    <input type="text" placeholder="Seu nome completo" />
                    <input type="text" placeholder="Digite seu email" />
                </div>

            </div>
            <img src="/src/assets/mocap-img.png" className="mt-10" alt="" />
        </div>
    )
}