export default function Counter({ count, setCount }) {
  return (
    <div>
      <div>
        counter:{" "}
        <span
          style={{
            color: "red",
          }}
        >
          {count}
        </span>
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>add</button>
        <button onClick={() => setCount(count - 1)}>subtract</button>
      </div>
    </div>
  );
}
