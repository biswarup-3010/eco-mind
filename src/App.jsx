import React from "react";
import NavBar from "./components/Header";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import TeamMember from "./components/TeamMember";
import JoinUsPage from "./components/JoinUsPage";
export default function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <AboutPage />
      <Services />
      <BlogPage />
      <JoinUsPage />
      <TeamMember />
    </>
  );
}
