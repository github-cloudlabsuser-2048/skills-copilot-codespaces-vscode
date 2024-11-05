import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}
function reverseSentence(sentence) {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
}
const data = [
    { name: 'John Doe', age: 28 },
    { name: 'Jane Smith', age: 34 },
    { name: 'Sam Johnson', age: 21 }
];

const names = data.map(person => person.name);
console.log(names); // Output: ['John Doe', 'Jane Smith', 'Sam Johnson']
const nestedData = [
    [{ name: 'John' }, { name: 'Doe' }],
    [{ name: 'Jane' }, { name: 'Smith' }],
    [{ name: 'Bob' }, { name: 'Johnson' }]
];

const extractedNames = nestedData.map(arr => arr[0].name);
console.log(extractedNames); // Output: ['John', 'Jane', 'Bob']