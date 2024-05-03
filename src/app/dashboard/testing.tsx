/*
|-----------------------------------------
| setting up Testing for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
const Testing = () => {
  return (
    <main>
      <div className="flex flex-col h-screen bg-gray-100">
        <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
          <span className="text-xl font-bold">Home</span>
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 hover:text-gray-700">
              Reporting (5)
            </span>
            <span className="text-gray-500 hover:text-gray-700">Inbox</span>
            <span className="text-gray-500 hover:text-gray-700">People</span>
            <span className="text-gray-500 hover:text-gray-700">Settings</span>
          </div>
        </header>
        <main className="flex-grow px-4 py-4">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-bold">My Tasks (3)</h2>
            <button className="px-3 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-700">
              Invite People
            </button>
          </div>
          <section className="mb-4">
            <h3 className="text-lg font-bold mb-2">Projects</h3>
            <ul className="space-y-2">
              <li className="px-4 py-2 rounded-md bg-gray-200 shadow-sm hover:bg-gray-300">
                Employee Onboarding
              </li>
              <li className="px-4 py-2 rounded-md bg-gray-200 shadow-sm hover:bg-gray-300">
                Employee Offboarding
              </li>
            </ul>
          </section>
        </main>
      </div>
    </main>
  );
};
export default Testing;
