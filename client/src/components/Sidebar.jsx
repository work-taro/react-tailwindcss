const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-6 fixed">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <ul className="space-y-4">
        <li><a href="#hero" className="hover:text-green-400">Hero</a></li>
        <li><a href="#about" className="hover:text-green-400">About</a></li>
        <li><a href="#experience" className="hover:text-green-400">Experience</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
