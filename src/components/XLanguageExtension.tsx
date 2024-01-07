const SteamExtension = () => {
  return (
    <div className="min-h-screen w-full bg-slate-900">
      <div
        className="container
        mx-auto
        flex
        h-full
        flex-col
        items-center
        justify-center
      "
      >
        <h1 className="mt-10 text-center text-4xl font-bold text-white">
          Content Language Filter for X
        </h1>
        <p className="mt-5 text-center text-white">
          Do not see the content in the languages you do not want to see.
        </p>

        <p className="mt-5 text-center text-green-400">
          Your extension has been successfully installed. Click on popup icon to add your preferred languages.
        </p>
        <p className="mt-5 text-center text-white">
          As you add preferred languages, the content in the languages you do not want to see will be hidden automatically while you are scrolling on X/Twitter.
        </p>
        <div className="flex gap-4">
          <img
            className="mt-5 rounded-lg"
            src="/assets/images/x/1.png"
            alt=""
            width={400}
          />


        </div>

        <div className="mt-5">
          <small className="text-center text-white">
           I build SaaS MVPs and Cross Platform Browser Extensions. You can check out my page <a
           className="text-blue-400 underline"
           href="https://mvpin15.com">Mvp in 15</a> for more information or contact me at <a 
            className="text-blue-400"  
            href="mailto:ugur.kellecioglu@outlook.com">
            ugur.kellecioglu@outlook.com
            </a>
            <br/>
            I share my experiences on my <a
            className="text-blue-400 underline"
            href="https://twitter.com/ugurcodes"  
            >
              Twitter 
            </a>. You can check it out if you want.

          </small>

   


          <a
            style={{
              cursor: 'pointer',
            }}
            className="mt-5 block pb-10 text-center text-green-400"
            href="/"
          >
            Home page
          </a>
        </div>
      </div>
    </div>
  );
};

export default SteamExtension;
