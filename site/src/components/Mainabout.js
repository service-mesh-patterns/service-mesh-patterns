import React from 'react'
import '../sections/mainabout.css';

const Mainabout = () => {
  return (
    <div className='about'>
        <div className="heading">About the <span className='green'>Service Mesh Patterns</span> Book</div>
        <div className="Box Box1">
            A service mesh is a layer in your infrastructure that facilitates communication between services… and so much more. Its value is enormous, and the value you derive from one is very much related to what role you play in the design, implementation, and operations of your cloud native applications and infrastructure.
        </div>
        <br />
        <div className='Box Box2'>
            As your organization adopts microservices, you also need a service mesh, the infrastructure layer that handles interservice communication in microservice architectures. This seminal book provides patterns and operational best practices to help you deploy and use service meshes in a way that meets your company's goals and needs.
        </div>
        <br />
        <div className='Box Box3'>
            Developers face a wide range of choices today: which service mesh to use, which features to deploy, and the best ways to exploit and deploy those features. Whether you're investigating service meshes or already use one, authors Lee Calcote and Nic Jackson provide universal patterns applicable to any service mesh: Istio, Linkerd, Consul, App Mesh, and more.
        </div>
        <br />
        <ul>
            <li className='list'>Get a vendor-neutral perspective on where each mesh shines (and perhaps, doesn't).</li>
            <li className='list'>Understand how service meshes benefit developers, operators, and service owners differently.</li>
            <li className='list'>Determine whether you're running your mesh effectively.</li>
            <li className='list'>Avoid service mesh lock-in through use of service mesh abstractions.</li>
            <li className='list'>Learn common deployment patterns for implementing a specific service mesh function.</li>
            <li className='list'>Use configuration best practices to avoid common pitfalls.</li>
            <li className='list'>Explore federation of service mesh deployments and other service mesh types.</li>            
        </ul>
        <div className="Box4">
            As microservices proliferate your environment, fear not: service meshes are here to manage your service sprawl. This book shows you how.
        </div>
        <div className='subhead'>Who is this book for?</div>
        <div>
           <div className="bbox">Identifying who this book is for has been one of the hardest challenges in writing it. The power of a service mesh is vast, and therefore, empowers individuals of many different roles.</div>
           <br />
           <div className="bbox">In short, this book is for anyone delivering workloads enabled by a service mesh and who wants to ensure their use of a service mesh provides the most possible value to the workloads and teams that rely on it.</div> 
        </div>
        
    </div>
    
  )
}

export default Mainabout