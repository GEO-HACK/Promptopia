import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text  text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      {/* desc is a custom syle in the global.css file */}
      <p className="desc text-center">   
        Promptopia is an open-source Ai prompting tools for modern world to
        discover, create and share creative prompts
      </p>
      
      <Feed />
    </section>
  );
};

export default Home;
