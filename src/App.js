import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

function App() {
    return (
        <Section title="Please leave feedback">
            <FeedbackOptions />
            <Statistics />
        </Section>
    );
}

export default App;
