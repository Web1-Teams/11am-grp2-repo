import React from 'react';
import Navbar from '/Navbar';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="container mt-5">
        <section id="content">
          <h2 className="my-4">المحتوى الرئيسي</h2>
          <p>هنا يمكنك إضافة المحتوى الخاص بالصفحة.</p>
        </section>
      </main>
    </div>
  );
};

export default App;
