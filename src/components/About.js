import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>React</h1>
      <h2>This is about page</h2>
      <User />
      <UserClass name={"Hunny(class)"} location={"surat"} />
    </div>
  );
};

export default About;
