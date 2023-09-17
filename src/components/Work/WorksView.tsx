import { FC, Suspense, lazy, useEffect, useState } from "react"
import type { Work } from "../../types"
import { Tags } from "../Tags"
import { useInView } from "react-intersection-observer";
import { WorkCard } from "../WorkCard";

const ModalWork = lazy(() => import("../ModalWork/ModalWork"));
const WorkItem = lazy(() => import('../WorkItem/WorkItem'));

interface WorkViewProps {
    works: Work[]
}
const WorksView: FC<WorkViewProps> = ({ works }) => {
    const { ref: worksContainer, inView: containerInView } = useInView();
    const [appear, setAppear] = useState<boolean>(false);

    useEffect(() => {
        if (containerInView) setAppear(true);
    }, [containerInView])

    return (
        <div id="Portfolio" className="row py-5 my-5 section">
            <div className="mb-4">
                <p className="blockquote-footer">MIS PROYECTOS</p>
                <h2>Proyectos recientes</h2>
            </div>
            <div ref={worksContainer} className="d-flex gap-4 justify-content-center">
                <Suspense fallback={<p>Loading...</p>}>
                    {
                        appear && works.map((work, index) => <WorkCard key={work.id} work={work} />)
                    }
                </Suspense>
            </div>
        </div>
    )
}

export default WorksView
