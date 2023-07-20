import TW from '../../images/tw.png';
import USA from '../../images/usa.png';
import CN from '../../images/cn.png';
import UK from '../../images/uk.png';
import IRE from '../../images/ire.png';
import NZ from '../../images/nz.png';
import AU from '../../images/au.png'
import SA from '../../images/sa.png'

export default function BuildTeacher({ teacher }) {

    function countrySwitch(country) {
        switch(country) {
            case 'Taiwan':
                return TW;
            case 'USA':
                return USA;
            case 'Canada':
                return CN;
            case 'UK':
                return UK;
            case 'Ireland':
                return IRE;
            case 'New Zealand' :
                return NZ;
            case 'Australia':
                return AU;
            case 'South Africa':
                return SA;
            default:
                return '';
        }
      };

    return(
        <div className="flex flex-col items-center justify-center rounded-xl gap-2">
            <div className=' w-44 h-44 flex justify-center items-end' >
                <img src={teacher.img_url} className="max-h-40"/>
            </div>
            <div className="flex justify-between items-center w-40 px-3 bg-[#E0D3AF] rounded-s-full rounded-e-full">
                <h4 className="text-lg text-red-900">{teacher.name}</h4>
                <img className="h-4" src={countrySwitch(teacher.country)} />
            </div>
            <p className="text-sm">{teacher.bio}</p>
        </div>
    )
}