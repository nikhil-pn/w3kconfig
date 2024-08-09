const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center px-24 py-5 pb-0">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <a target="_blank"
          href="https://lu.ma/4j0wylud" // Replace with your desired URL
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          Web3Kerala
        </a>
        <div>Sponored by Ethereum Foundation</div>
      </div>
    </div>
  );
};

export default Navbar;
