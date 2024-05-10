export default function Home() {
  return (
    <div className="card-container">
      <div className="card">
        <h2 className="card-title">Feeling Good</h2>
        <img
          className="image"
          src="./favicon.ico"
          width="360"
          height="240"
          alt=""
        />
        <p className="description">I AM A CAT. As yet I have no name.</p>
        <div className="label">
          <span className="material-symbols-outlined">pets</span>Goods
        </div>
      </div>
    </div>
  );
}
