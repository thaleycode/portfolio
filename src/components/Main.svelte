<script lang="ts">
	import Step from "./Step.svelte";

    let steps = [
        {name: 'Store', icon: 'fa-solid fa-cart-shopping', href: '######replace'},
        {name: 'Ultimate Todos', icon: 'fa-solid fa-list-check', href: '#######replace'},
        {name: 'Pokedex', icon: 'fa-solid fa-diagram-project', href: '######replace'},
    ]

    let benefits = [
        {name: 'a Software Engineering student of Kennesaw State University', description: ''},
        {name: '', description: ''},
        {name: 'an excellent communicator', description: ''},
    ]

</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Tyler</span> Haley <br/>Software
                <span class="poppins text-violet-400">Engineer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-violet-400">favorite tech</span> includes JavaScript (React.JS or SvelteKit), TailwindCSS, Node.js + Express.js & PostgreSQL or Firebase/FireStore!
            </p>
            <a href="######replace" class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" target="_blank">
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full duration-200 z-0" />
                <h4 class="relative z-9">Get in touch &rarr;</h4>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img src={"images/#####.png"} alt="Profile" class="object-cover z-[2] max-h-[70vh]">
        </div>
    </section>



    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my projects
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Have a <span class="poppins text-violet-400">look</span> at some of my work!
            </h3>
        </div>
        <a href="####" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200">
                <i class="fa-regular fa-circle-play" />
                <p>Watch the video</p>
        </a>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>This store is a merchandizing store created with <strong class="text-violet-400">Next.js, Node.js + Express.js,</strong> and <strong class="text-violet-400">Firebase</strong> CRUD application that allows a user to login, manage an organized todo list, and access this information across multiple devices.</p>
            </Step>
            <Step step={steps[1]}>
                <p>Ultimate Todo is a Full Stack <strong class="text-violet-400">Next.js, Commerce.js, Stripe,</strong> and <strong class="text-violet-400">Node.js + Express.js</strong>. Commerce.js is a product Content Management System and Stripe is used for all transaction handling.</p>
            </Step>
            <Step step={steps[2]}>
                <p>The Pokedex is a <strong class="text-violet-400">SvelteKit</strong> and <strong class="text-violet-400">TailwindCSS</strong> web application for people who gotta catch 'em all. Hosted on <strong class="text-violet-400">Netlify</strong> and consumes and caches the <strong class="text-violet-400">Pokemon API</strong>.</p>
            </Step>
        </div>
    </section>
    <section id="about "class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
            <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3>
        </div>
        <p class="ms-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . . </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, i}
                <div class="flex gap-6 sm:gap-8">
                    <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                        0{i + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>
                            {benefit.description}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </section>
</main>