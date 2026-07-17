function Loader() {
  return (
    <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50">

      <div className="text-center">

        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto"></div>


        <h2 className="text-white text-2xl font-bold mt-6">
          HOME CONSTRUCTORS
        </h2>


        <p className="text-gray-400 mt-2">
          Building your experience...
        </p>

      </div>

    </div>
  );
}

export default Loader;