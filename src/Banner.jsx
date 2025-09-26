import Progress from "./Progress";

export default function Banner() {
  return (
    <div className="my-18">
      <div className="flex justify-between flex-2 gap-7">
        <Progress></Progress>
        <Progress></Progress>
      </div>
    </div>
  );
}
