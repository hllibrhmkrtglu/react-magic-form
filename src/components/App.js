import "./App.css"
import { useFormik } from "formik"
import * as Yup from "yup"


const App = () => {
  const { handleSubmit, handleChange, values, dirty, isSubmitting } = useFormik({
    initialValues: {
      name: "",
      email: "",
      agree: false,
      favoriteColor: "",
    },
    onSubmit:(values)=>{
      console.log(values);
    },
    validationSchema: {
      Yup: Yup.object({
        name: Yup.string().required("İsim boş bırakılamaz.."),
        email: Yup.string().email().required("Email boş bırakılamaz.."),
        agree: Yup.boolean().required("Anlaşma koşulları kabul etmelisin.."),
        favoriteColor: Yup.string().required("Hadi ama herkesin sevdiği bir renk vardır!").oneOf(["red", "blue", "green"]),
      })
    }
  })
return (
  <div className="container">
    <div className="brand-box">
      <h1>Magic Form</h1>
      <p>Build forms in React without the tears.</p>
    </div>

    <div className="magic-form">
      <form onSubmit={handleSubmit}>

        <h3>Kaydol</h3>
        <label htmlFor="name">İsim</label>
        <input
          name="name"
          placeholder="İbrahim..."
          className="input"
          value={values.name}
          onChange={handleChange}
        />

        <label htmlFor="email" className="topMargin">Email</label>
        <input
          name="email"
          type="email"
          placeholder="halil_ibrahim34@hotmail.com"
          className="input" value={values.email}
          onChange={handleChange}
        />

        <label htmlFor="favoriteColor" className="topMargin">Favori Renk</label>
        <select
          name="favoriteColor"
          value={values.favoriteColor}
          style={{ marginTop: 10, width: "150px", padding: "10px 15px", outline: "none", }}
          onChange={handleChange}
        >

          <option value="" label="Renk Seç" />
          <option value="red" label="Kırmızı" />
          <option value="blue" label="Mavi" />
          <option value="green" label="Yeşil" />
        </select>

        <div className="checkbox topMargin">
          <input type="checkbox" name="agree" value={values.agree} onChange={handleChange} />
          <label htmlFor="agree" className="checkbox-label">Sözlemeyi okudum kabul ediyorum..</label>
        </div>
        <button type="submit" disabled={!dirty || isSubmitting}>Kaydol</button>
      </form>
    </div>
  </div>
)
}


export default App;

