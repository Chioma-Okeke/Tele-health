import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { PhysicianContext } from "../../context/PhysicianContext";
import { useContext } from "react";
import PhysicianCard from "../PhysicianCard";
import { Link } from "react-router-dom";

function FindSpecialist() {
    const { physicians } = useContext(PhysicianContext);

    const [atStart, setAtStart] = React.useState(true);
    const [atEnd, setAtEnd] = React.useState(false);
    const galleryRef = React.useRef(null);

    React.useEffect(() => {
        // Function to check scroll position
        const checkScrollPosition = () => {
            const gallery = galleryRef.current;
            if (gallery) {
                const { scrollLeft, scrollWidth, clientWidth } = gallery;
                const isAtStart = scrollLeft === 0;
                const isAtEnd = scrollLeft + clientWidth >= scrollWidth;
                setAtStart(isAtStart);
                setAtEnd(isAtEnd);
            }
        };

        // Event listener to check scroll position on scroll
        const handleScroll = () => {
            checkScrollPosition();
        };

        // Attach event listener to gallery element
        const gallery = galleryRef.current;
        if (gallery) {
            gallery.addEventListener("scroll", handleScroll);
        }

        // Initial check on component mount
        checkScrollPosition();

        // Cleanup on unmount
        return () => {
            if (gallery) {
                gallery.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    function backScroll() {
        let slider = document.getElementById("gallery");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    function forwardScroll() {
        let slider = document.getElementById("gallery");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    console.log(physicians);
    return (
        <section className="relative">
            <div className="flex items-center justify-between mt-10">
                <h2 className="font-semibold">Find Specialist</h2>
                <Link to="/home/specialists" className="cursor-pointer">
                    <div className="flex items-center gap-2 text-[#667185] font-semibold">
                        <span>See all</span>
                        <GrNext />
                    </div>
                </Link>
            </div>
            <div className="relative mt-6 ">
                <div
                    id="gallery"
                    ref={galleryRef}
                    className=" flex items-center gap-5 overflow-x-scroll scroll-smooth"
                >
                    {physicians.filter((physician) => physician.id < 6).map((filteredPhysician) => {
                        return (
                            <PhysicianCard
                                key={filteredPhysician.id}
                                src={filteredPhysician.image}
                                fullName={filteredPhysician.fullName}
                                isOnline={filteredPhysician.isOnline}
                                jobTitle={filteredPhysician.jobTitle}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="flex justify-end mt-5">
                <div className="flex items-center gap-4">
                    <button
                        className={`border p-2 rounded-lg ${
                            atStart ? "opacity-40" : ""
                        }`}
                        onClick={backScroll}
                        disabled={atStart}
                    >
                        <GrPrevious />
                    </button>
                    <button
                        className={`border p-2 rounded-lg ${
                            atEnd ? "opacity-40" : ""
                        }`}
                        onClick={forwardScroll}
                        disabled={atEnd}
                    >
                        <GrNext />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default FindSpecialist;
