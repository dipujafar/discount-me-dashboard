import TermsEditor from "@/components/(dashboardLayout)/terms/TermsEditor";

const TermsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold w-full text-primary-white">
        Terms of use
      </h1>
      <TermsEditor></TermsEditor>
    </div>
  );
};

export default TermsPage;
