import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";

export default function About() {
  const getDate = () => {
    var dob = new Date("01/21/2003");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };
  return (
    <div
      id="about"
      className="xl:min-h-screen h-[1000px] bg-white flex flex-col text-center gap-5 text-black text-lg  font-normal"
    >
      <div className="head xl:text-5xl text-3xl mt-12 font-bold" data-aos={"slide-down"}>
        About Me
      </div>
      <div className="flex flex-col items-center justify-center gap-6 ml-8 w-full">
        <div className="flex flex-col justify-center mt-14 lg:w-full w-[28rem] gap-6">
          <h3 className="text-3xl font-medium" data-aos={"fade-left"}>
            I'm <span className="text-yellow-600">Ngo Van Quan,</span> a Web
            Developer
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-center"
            data-aos={"fade-left"}
          >
            I am {getDate()}{" "}
            years old. As an aspiring programmer passionate about technology. Proficient in HTML, CSS, and JavaScript,  <br />
            I particularly enjoy working with React for building dynamic web interfaces. I'm a self-motivated learner, <br />
            adept at creative problem-solving, and value collaboration in team environments. Eager to contribute to <br />
            exciting projects, I'm seeking opportunities to apply my skills and grow professionally. Let's connect and <br />
            explore the possibilities!
          </p>
          <p
            className="text-center leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
            I am currently looking for jobs.
            I worked on React, nodeJs.
          </p>
        </div>
        <div
          class="relative flex justify-center lg:w-32 w-24 sm:rounded-lg lg:pl-4"
          data-aos={"slide-left"}
        >
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>
          <button className="py-3 mt-5 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 animate-zoomy">
            <a
              href={require("../../assets/files/CV_NgoVanQuan.pdf")}
              download={"CV_NgoVanQuan.pdf"}
            >
              Download CV
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
