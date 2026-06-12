export function AboutMePage() {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="font-medium text-3xl text-white mb-2">Hi, I'm Marcus,</h1>
                <p className="text-lg text-justify text-wrap tracking-wide text-zinc-300 leading-relaxed">
                    a recent BSIT graduate who loves the process of building things. My journey into tech started
                    at university, when I realized that developing systems is the ultimate outlet for my passion.
                    I've always loved that incredible feeling when you see an idea come to life and watch people
                    actually use it—man, that feeling for me is like no other. One thing about me is that I am
                    obsessed with learning, which fits the nature of information technology perfectly. I believe
                    that learning the standards is just as important as mastering the fundamentals. Because we don't
                    just write code, we write <span className="text-white font-semibold">'good code.'</span>
                </p>
            </div>

            <p className="text-lg text-justify text-wrap tracking-wide text-zinc-300 leading-relaxed">
                Now that I've graduated, the grinding hasn't stopped. I’m currently sharpening both my frontend
                and backend skills, diving into advanced system architecture, and actively looking for my first
                official role as a <span className="text-white font-semibold">Junior Software Engineer</span>.
            </p>

            <p className="text-lg text-justify text-wrap tracking-wide text-zinc-300 leading-relaxed">
                I am looking for a team where I can contribute clean code, tackle complex bugs head-on, and learn
                from seasoned developers who challenge me to grow.
            </p>

            <p className="text-lg text-justify text-wrap tracking-wide leading-relaxed font-medium text-zinc-200">
                If you're looking for a driven junior developer who genuinely loves the build process,
                let’s connect!
            </p>
        </div>
    );
}