import React from "react";
import SearchInput from "./SearchInput";
import { PhysicianContext } from "../context/PhysicianContext";
import PhysicianCard from "./PhysicianCard";

function PhysicianGrid() {
    const {
        physicians,
        searchPhysician,
        setSearchPhysician,
        searchPhysicianByName,
    } = React.useContext(PhysicianContext);

    return (
        <section>
            <header className="flex items-center">
                <h1 className="flex-1 text-3xl font-semibold text-[#040703]">Specialists</h1>
                <SearchInput
                    className="flex-1"
                    onChange={(e) => {
                        setSearchPhysician(e.target.value);
                    }}
                />
            </header>
            <div className="grid grid-cols-4 2xl:grid-cols-6 gap-5 mt-10">
                {searchPhysician
                    ? searchPhysicianByName.map((physician) => {
                          return (
                              <PhysicianCard
                                  key={physician.id}
                                  src={physician.image}
                                  fullName={physician.fullName}
                                  isOnline={physician.isOnline}
                                  jobTitle={physician.jobTitle}
                              />
                          );
                      })
                    : physicians.map((physician) => {
                          return (
                              <PhysicianCard
                                  key={physician.id}
                                  src={physician.image}
                                  fullName={physician.fullName}
                                  isOnline={physician.isOnline}
                                  jobTitle={physician.jobTitle}
                              />
                          );
                      })}
            </div>
        </section>
    );
}

export default PhysicianGrid;
