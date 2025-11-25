import Student from './Student';

const StudentList = () => {
    const studentsData = [
        { nombre: "Juan Pérez", edad: 20  },
        { nombre: "María Gómez", edad: 22 },
        { nombre: "Luis Rodríguez", edad: 21}
    ];
    return (
        <div>
            {studentsData.map((student, index) => (
                /* Pasa los datos como prop al componente 
                   Student, que es básicamente presentacional */
                <Student key={index} datos={student} />
            ))}
        </div>
    );
}

export default StudentList;


