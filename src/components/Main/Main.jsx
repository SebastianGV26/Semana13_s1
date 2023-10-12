import './Main.css'
export const Main = () => {
  return (
    <section className="Container_main">
      <article className="Container_izq">
        <div className="Contenido_izq">
          <h2>Smart Digital Watch For Luxurious Life</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A amet
            corrupti dolorem nobis ex itaque neque illum laboriosam.
          </p>
          <button className='btn_comprar'>Buy Products</button>
        </div>
      </article>
      <article className="Container_der">
        <img className="img_main" src="https://parspng.com/wp-content/uploads/2023/06/watchpng.parspng.com-9.png" alt="" />
      </article>
    </section>
  );
};
