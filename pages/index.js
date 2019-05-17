import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>Welcome to Flamingo</h1>
      <h3>SMS lists and CRM integrations</h3>
      <p>
        <ul>
          <li>Step 1: <Link href="/signup">Create</Link> an account</li>
          <li>Step 2: (Optional) Integrate with your mailing list provider</li>
          <li>Step 3: Import phone numbers and contact information of your subscribers</li>
          <li>Step 4: Send!</li>
        </ul>

  
      </p>
      
      <style global jsx>{`
        body {
          background: #FFD0C7;
        }
      `}</style>
    </div>
  );
}

export default Home;
