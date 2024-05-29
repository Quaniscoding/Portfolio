import EmailIcon from "@mui/icons-material/Email";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";
import emailjs from "emailjs-com";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_3v61k84",
        "template_msex4i2",
        {
          from_name: form.name,
          to_name: "Van Quan",
          from_email: form.email,
          to_email: "vq.2509.2003@gmail.com",
          message: form.message,
        },
        "gmeaxMJKHjK02g0Dm"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Ahh, something went wrong. Please try again.");
        }
      );

  };
  return (
    <div
      id="contact"
      className="flex text-center flex-col gap-12 lg:mt-28 xl:min-h-screen h-[1000px] overflow-hidden"
    >
      <div class="text-5xl font-bold aos-init aos-animate" data-aos="fade">Contact</div>
      <div className="flex lg:flex-row flex-col">
        <div className="flex-auto lg:w-32 lg:pl-10 mx-2 overflow-hidden">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <label class="block mb-2 text-2xl font-semibold mt-3  text-white ">
              Get in Touch
            </label>
            <div class="flex pt-9">
              <span class="inline-flex items-center px-3 text-sm  border border-r-0  rounded-l-md bg-gray-600 text-gray-400 border-gray-600">
                <PersonIcon />
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                class="rounded-none rounded-r-lg  border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div class="flex pt-9">
              <span class="inline-flex items-center px-3 text-sm border border-r-0 rounded-l-md bg-gray-600 text-gray-400 border-gray-600">
                <AlternateEmailIcon />
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="rounded-none rounded-r-lg border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="block h-40 text-white mt-10 p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 resize-none"
            />
            <button
              type="submit"
              className="mt-7 py-2 px-4 rounded-md 
              bg-blue-500 hover:bg-blue-700 focus:ring-blue-800"
            >
              {loading ? "Sending..." : <><EmailIcon /> Send messages</>}
            </button>
          </form>
        </div>
        <div className="flex-auto lg:w-80 flex flex-col justify-center text-center items-center gap-1 lg:pt-0 pt-48">
          <div data-aos={"fade-left"}>
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets9.lottiefiles.com/packages/lf20_3rqwsqnj.json"
              style={{ width: "350px" }}
            />
          </div>
          <div data-aos={"slide-up"} className="text-center">
            <div className="text-center mt-2 text-3xl font-bold">Follow Me</div>
            <div className="text-white flex flex-row gap-7 w-fit mx-auto pt-4">
              <div
                onClick={() =>
                  window.open("https://github.com/Quaniscoding", "_blank")
                }
              >
                <GitHubIcon className="cursor-pointer hover:scale-105" />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/quandicode/",
                    "_blank"
                  )
                }
              >
                {" "}
                <InstagramIcon className="cursor-pointer hover:scale-105" />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/ngo-quan-807952233/",
                    "_blank"
                  )
                }
              >
                {" "}
                <LinkedInIcon className="cursor-pointer hover:scale-105" />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/Vquan2509/",
                    "_blank"
                  )
                }
              >
                <FacebookIcon className="cursor-pointer hover:scale-105" />
              </div>{" "}
            </div>
            <div className="mt-6 italic text-sm font-medium text-blue-500 ">
              <span className=" pl-1 ">Copyright</span>
              <CopyrightIcon className="cursor-pointer mx-1" />
              <span>2023 Ngo Van Quan</span>
            </div>
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
}
