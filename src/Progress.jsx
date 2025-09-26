export default function Progress() {
  return (
    <div className="flex flex-col text-center items-center py-14 text-white w-full rounded-2xl bg-[url('src/assets/vector1.png'),url('src/assets/vector1.png')] bg-green-500 bg-no-repeat bg-[position:top_left,top_right] ">
      <h3 className="text-2xl">In Progress</h3>
      <p className="font-semibold text-6xl mt-3">0</p>
    </div>
  );
}
