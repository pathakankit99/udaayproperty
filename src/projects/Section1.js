import ProjectCard from "./ProjectCard";

function Section1() {
    return (
        <section className="pt-32 lg:pt-0 p-4 lg:px-16">
            <h1 className="heading text-center font-bold lg:font-normal lg:py-16 lg:underline">Projects by Udaan Property</h1>
            <div className="flex flex-wrap justify-center items-center">
                <ProjectCard 
                img="https://images.unsplash.com/photo-1625111970819-5f32ac1885c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                heading="Utsav Residential"
                location="bagdogra"
                url="/utsav-residential"
                />
                <ProjectCard 
                img="https://images.unsplash.com/photo-1625150094161-31b945e99b24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                heading="Sheena Residential"
                location="Ranidanga"
                />
                <ProjectCard 
                img="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                heading="Kundu Residential"
                location="naxalbari"
                />
            </div>
        </section>
    );
}

export default Section1;