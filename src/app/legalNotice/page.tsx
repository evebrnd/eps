import Link from "next/link";

export default function Page() {
    return (
        <div>
            <div className="mt-40 mb-10">
                <div className="flex flex-col items-center justify-center">
                <button className="m-2 rounded-lg bg-blue-500 hover:bg-blue-700 p-2 px-5 text-white text-lg text-bold shadow">
                        <a href="/eps">
                            Back to site
                        </a>
                    </button>
                </div>
            </div>

            <div>
                <h2 id="infos" className="text-center text-2xl font-bold mt-4 p-4">General information</h2>
                <ul className="p-4 w-5/6 text-center mx-auto">
                    <li>
                        <Link
                            href="https://evebrnd.github.io/eps/"
                            target="_blank"
                        >
                            Site: https://evebrnd.github.io/eps/
                        </Link>

                    </li>
                    <li>
                        <a
                            href={"mailto:evber2263@oslomet.no"}
                            target="_blank"
                        >
                            Email: <strong>evber2263@oslomet.no</strong>
                        </a>

                    </li>
                    <li>Host: GitHub pages</li>
                </ul>
                <p className="p-4 mx-3 text-justify">
                    This website is a project created by students of Oslo Metropolitan University for the European Project Semester of Spring 2024. The purpose of this website is for educational purposes only and does not represent any commercial or official activity.
                </p>
                <h2 className="text-center text-2xl font-bold mt-4 p-4">Content Disclaimer</h2>
                <p className="p-4 mx-3 text-justify">
                    The information contained on this website is for general information purposes only and does not constitute professional advice. We endeavor to keep the information on this website accurate and up-to-date, but we make no warranties or representations, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website for any purpose.
                </p>
                <h2 className="text-center text-2xl font-bold mt-4 p-4">External Links Disclaimer</h2>
                <p className="p-4 mx-3 text-justify">
                    This website may contain links to other websites or resources provided by third parties. These links are provided solely as a convenience to you and do not constitute an endorsement by us of the content, products, or services contained on those external websites. We have no control over the content of these sites and accept no responsibility for any loss or damage arising from your use of them.
                </p>
                <h2 className="text-center text-2xl font-bold mt-4 p-4">Contact Us</h2>
                <p className="p-4 mx-3 text-justify">
                If you have any questions about this legal notice or the content of this website, please contact us at evber2263@oslomet.no.
                </p>
                <h2 id="propriete" className="text-center text-2xl font-bold mt-4 p-4">Intellectual property rights</h2>
                <p className="p-4 mx-3 text-justify">
                    All information or documents contained on the site, as well as all elements created for the site, are either the property of the Oslo Metropolitan University or are subject to rights of use, reproduction, and representation granted to the university. All information on this site is subject to Norwegian and international legislation protecting copyright.
                </p>
                <h2 className="text-center text-2xl font-bold mt-4 p-4">General provisions</h2>
                <p className="p-4 mx-3 text-justify">
                    We may update these terms of use of the site at any time. The general conditions of use of the site are subject to Norwegian law and fall under the jurisdiction of the Norwegian courts.
                </p>
                <p className="p-4 mx-3 pb-20 text-justify">
                    The Oslo Metropolitan University cannot be held responsible for any direct or indirect damage resulting from your visit to its website, the use or inability to access and/or use the content of this site. This limitation applies to all types of direct or indirect damages, including data loss, loss of profits, and business interruption.
                </p>
            </div>
        </div>
    );
}
