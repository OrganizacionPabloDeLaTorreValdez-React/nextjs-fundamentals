"use client";
import { useRouter } from "next/navigation";

function AboutPage() {
  /*
    UseRouter te permite ejecutar logica
    antes de redirigir a otra página
  */
  const router = useRouter();
  return (
    <section>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda soluta, culpa, commodi impedit necessitatibus dignissimos quaerat laborum perferendis harum ea voluptatem, minima illo ex totam blanditiis laudantium ab. Eum voluptate quam, debitis quos dolor impedit. Aliquam hic quaerat voluptatem adipisci voluptatum, tempora beatae sunt sapiente cupiditate, nisi eveniet obcaecati omnis, dolor atque dolorem maiores? Eos dolore iusto et earum sunt neque vitae repudiandae nisi eius! Praesentium quod sequi illo quos ducimus ex ipsum nemo cumque at tempora sapiente, soluta amet officia debitis, itaque ab magnam ut sit ullam. Quo ab distinctio ratione. Quam facere tempore culpa vel sunt, neque nemo.
      </p>
      <button
        className="bg-sky-400 px-3 py-2 rounded-md ring-2 ring-white"
        onClick={() => {
          // query to server
          alert('Executing code!');
          router.push('/');
        }}
      >
        Click
      </button>
    </section>
  );
}

export default AboutPage;