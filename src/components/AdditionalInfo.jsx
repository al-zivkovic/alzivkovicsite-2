const AdditionalInfo = () => {
  return (
      <div id="other-interests" className="flex flex-col justify-center mt-[150px]">
          <h1 className="text-2xl sm:text-4xl pb-6 sm:pb-10">Other Interests</h1>
          <div className="text-[15px]">
              <p className="mb-10">
                Outside of software development, I have a profound interest in the gym, specifically topics related to bodybuilding, powerlifting and nutition.
              </p>
              <div className="mt-4 p-4 bg-gray-900 rounded-lg border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-white">🏋️‍♂️ My current powerlifting maxes:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-3 bg-gray-800 rounded-md">
                    <span className="text-sm text-gray-400 mb-1">Squat</span>
                    <span className="text-xl font-bold text-white">345lbs / <span className="text-sm text-gray-400">155kg</span></span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-800 rounded-md">
                    <span className="text-sm text-gray-400 mb-1">Bench Press</span>
                    <span className="text-xl font-bold text-white">275lbs / <span className="text-sm text-gray-400">125kg</span></span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-800 rounded-md">
                    <span className="text-sm text-gray-400 mb-1">Deadlift</span>
                    <span className="text-xl font-bold text-white">485lbs / <span className="text-sm text-gray-400">220kg</span></span>
                  </div>
                </div>
              </div>
          </div>
      </div>
  );
}

export default AdditionalInfo;