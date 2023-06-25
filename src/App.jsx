import "./App.css";
import Card from "./components/Card";
import Question from "./components/Question";

const faq = [
  {
    id: 1,
    question: "Do I Have To Allow The Use Of Cookies?",
    answer:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    id: 2,
    question: "How Do I Change My My Page Password?",
    answer:
      "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 3,
    question: "What Is BankID?",
    answer:
      "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 4,
    question: "Whose Birth Number Can I Use?",
    answer:
      "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },
  {
    id: 5,
    question: "When Do I Recieve A Password Ordered By Letter?",
    answer:
      "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan",
  },
];

function App() {
  return (
    <div className="flex justify-center items-center">
      <Card>
        <h1 className="text-3xl mb-5 font-bold">Frequently Asked Questions</h1>
        {faq.map((item) => (
          <div
            key={item.id}
            className="border-2 border-slate-200 p-5 flex flex-col w-full rounded-md gap-3"
          >
            <Question question={item.question} answer={item.answer} />
          </div>
        ))}
      </Card>
    </div>
  );
}

export default App;
