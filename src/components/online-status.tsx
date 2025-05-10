export function OnlineStatus() {
  const isOnline = !false;
  return (
    <div className=" gap-2 items-center sans hidden sm:flex animate-primary">
      <div className="relative flex items-center justify-center">
        {isOnline && (
          <div
            className={`h-3 w-3 rounded-full bg-green-300 animate-slow-ping absolute `}
          ></div>
        )}
        <div
          className={`h-2 w-2 rounded-full ${
            isOnline ? "bg-green-600" : "bg-red-500"
          } relative z-10 shadow-md`}
        ></div>
      </div>
      <p className={`${isOnline ? "text-green-700" : "text-red-500"}`}>
        {isOnline ? "Available for work" : `Offline [${4} min ago]`}
      </p>
    </div>
  );
}
