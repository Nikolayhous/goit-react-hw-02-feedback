import Container from './components/Container/Container';
import Section from './components/Title/Title';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

function App() {
    return (
        <Container>
            <Section title="Please leave feedback">
                <FeedbackOptions />
            </Section>
        </Container>
    );
}

export default App;
