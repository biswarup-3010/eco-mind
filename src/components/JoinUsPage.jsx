import TeamMember from "./TeamMember";
export default function JoinUsPage() {
  return (
    <>
      {/*for this page give the ID of the page as "JoinUsPage" ** most important */}
      <div className="bg-black/80 text-white pt-16" id="JoinUsPage">
        <TeamMember />
      </div>
    </>
  );
}
