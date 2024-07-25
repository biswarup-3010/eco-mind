import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import Services from "./components/Services";
import BlogPage from "./components/BlogPage";
import JoinUsPage from "./components/JoinUsPage";
export default function App() {
  return (
    <>
      <Header />
      <HomePage />
      <AboutPage />
      <Services />
      <BlogPage />
      <JoinUsPage />
    </>
  );
}
