"use client"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 font-sans dark:bg-slate-900">
      <main className="flex w-full max-w-2xl flex-col items-center justify-center gap-8 px-6 py-16 sm:px-8 md:px-12">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Success Icon */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <svg
              className="h-12 w-12 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Success Message */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl md:text-5xl">
              Deployment Successful!
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl">
              Your server and Coolify setup is working perfectly.
            </p>
          </div>

          {/* Status Cards */}
          <div className="mt-4 flex w-full flex-col gap-4 sm:flex-row">
            <div className="flex flex-1 flex-col gap-2 rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Server Status
                </span>
              </div>
              <p className="text-left text-sm text-slate-600 dark:text-slate-400">
                Server is running and responding correctly
              </p>
            </div>

            <div className="flex flex-1 flex-col gap-2 rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Coolify Status
                </span>
              </div>
              <p className="text-left text-sm text-slate-600 dark:text-slate-400">
                Coolify deployment configured successfully
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">
            This page confirms that your Next.js application is properly deployed
            and accessible through Coolify.
          </p>
        </div>
      </main>
    </div>
  );
}
