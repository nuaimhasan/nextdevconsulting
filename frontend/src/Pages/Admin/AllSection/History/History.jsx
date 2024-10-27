import { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";
import {
  useAddHistoryMutation,
  useGetHistoryQuery,
  useUpdateHistoryMutation,
} from "../../../../Redux/whoWeAre/history/historyApi";

export default function History() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [impactAssessmentContent, setImpactAssessmentContent] = useState("");
  const [sustainableAgricultureContent, setSustainableAgricultureContent] =
    useState("");
  const [transportInfrastructureContent, setTransportInfrastructureContent] =
    useState("");
  const [climateEnergyContent, setClimateEnergyContent] = useState("");
  const [policyFormulationContent, setPolicyFormulationContent] = useState("");
  const [researchContent, setResearchContent] = useState("");
  const [grantManagementContent, setGrantManagementContent] = useState("");
  const [capacityBuildingContent, setCapacityBuildingContent] = useState("");
  const [technicalAssistanceContent, setTechnicalAssistanceContent] =
    useState("");
  const [digitalTransformationContent, setDigitalTransformationContent] =
    useState("");

  const [id, setId] = useState(null);

  const { data: privacy, isLoading } = useGetHistoryQuery();

  const [addPrivacy, { isLoading: addIsLoading }] = useAddHistoryMutation();

  const [updatePrivacy, { isLoading: updateIsLoading }] =
    useUpdateHistoryMutation();

  useEffect(() => {
    if (privacy) {
      setContent(privacy?.data?.description);
      setId(privacy?.data?._id);
      setImpactAssessmentContent(privacy?.data?.impactAssessment);
      setSustainableAgricultureContent(privacy?.data?.sustainableAgriculture);
      setTransportInfrastructureContent(privacy?.data?.transportInfrastructure);
      setClimateEnergyContent(privacy?.data?.climateEnergy);
      setPolicyFormulationContent(privacy?.data?.policyFormulation);
      setResearchContent(privacy?.data?.research);
      setGrantManagementContent(privacy?.data?.grantManagement);
      setCapacityBuildingContent(privacy?.data?.capacityBuilding);
      setTechnicalAssistanceContent(privacy?.data?.technicalAssistance);
      setDigitalTransformationContent(privacy?.data?.digitalTransformation);
    }
  }, [privacy]);

  const handlePrivacyPolicy = async (e) => {
    e.preventDefault();
    const info = {
      description: content,
      impactAssessment: impactAssessmentContent,
      sustainableAgriculture: sustainableAgricultureContent,
      transportInfrastructure: transportInfrastructureContent,
      climateEnergy: climateEnergyContent,
      policyFormulation: policyFormulationContent,
      research: researchContent,
      grantManagement: grantManagementContent,
      capacityBuilding: capacityBuildingContent,
      technicalAssistance: technicalAssistanceContent,
      digitalTransformation: digitalTransformationContent,
    };

    try {
      if (id) {
        const res = await updatePrivacy({ id, data: info });
        if (res?.data?.success) {
          Swal.fire("Success", "Services updated successfully", "success");
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      } else {
        const res = await addPrivacy(info);
        if (res?.data?.success) {
          Swal.fire("Success", "Services created successfully", "success");
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong", "error");
      console.log(error);
    }
  };

  return (
    <div className="make_privacy_policy">
      <div className="make_privacy_policy">
        <h2 className="mb-3 text-center text-xl font-medium text-primary sm:text-2xl">
          {id ? "Edit Services" : "Create Services"}
        </h2>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handlePrivacyPolicy}>
            <JoditEditor
              ref={editor}
              value={content}
              onBlur={(newContent) => setContent(newContent)}
            />

            {/* New sections with JoditEditor */}
            <h3 className="py-6 text-center text-lg font-medium text-green-500">
              Impact Assessment and Evaluation
            </h3>
            <JoditEditor
              value={impactAssessmentContent}
              onBlur={(newContent) => setImpactAssessmentContent(newContent)}
            />

            <h3 className="py-6 text-center text-lg font-medium text-green-500">
              Sustainable Agriculture and Food Systems
            </h3>
            <JoditEditor
              value={sustainableAgricultureContent}
              onBlur={(newContent) =>
                setSustainableAgricultureContent(newContent)
              }
            />

            <h3 className="py-6 text-center text-lg font-medium text-green-500">
              Transport, Infrastructure, and Mobility
            </h3>
            <JoditEditor
              value={transportInfrastructureContent}
              onBlur={(newContent) =>
                setTransportInfrastructureContent(newContent)
              }
            />

            <h3 className="py-6 text-center text-lg font-medium text-green-500">
              Climate, Energy, and Environment
            </h3>
            <JoditEditor
              value={climateEnergyContent}
              onBlur={(newContent) => setClimateEnergyContent(newContent)}
            />

            <h3 className="py-6 text-center text-lg font-medium text-green-500">
              Policy Formulation and Strategy Development
            </h3>
            <JoditEditor
              value={policyFormulationContent}
              onBlur={(newContent) => setPolicyFormulationContent(newContent)}
            />

            <h3 className="py-6 text-center text-lg font-medium text-green-500">
              Qualitative and Quantitative Research
            </h3>
            <JoditEditor
              value={researchContent}
              onBlur={(newContent) => setResearchContent(newContent)}
            />

            <h3 className="py-6 text-center text-lg font-medium text-green-500">
              Full-Cycle Grant Management
            </h3>
            <JoditEditor
              value={grantManagementContent}
              onBlur={(newContent) => setGrantManagementContent(newContent)}
            />

            <h3 className="py-6 text-center text-lg font-medium text-green-500">
              Capacity Building and Training
            </h3>
            <JoditEditor
              value={capacityBuildingContent}
              onBlur={(newContent) => setCapacityBuildingContent(newContent)}
            />

            <h3 className="py-6 text-center text-lg font-medium text-green-500">
              Technical Assistance
            </h3>
            <JoditEditor
              value={technicalAssistanceContent}
              onBlur={(newContent) => setTechnicalAssistanceContent(newContent)}
            />

            <h3 className="py-6 text-center text-lg font-medium text-green-500">
              Digital Transformation and Innovation
            </h3>
            <JoditEditor
              value={digitalTransformationContent}
              onBlur={(newContent) =>
                setDigitalTransformationContent(newContent)
              }
            />

            <div className="mt-4">
              <button
                className="admin_btn"
                disabled={addIsLoading || updateIsLoading}
              >
                {addIsLoading || updateIsLoading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
