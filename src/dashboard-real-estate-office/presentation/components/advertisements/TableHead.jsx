import {TEXT_COLORS} from "../../../../shared/colors.jsx";

const TableHead = () => {
    return (
        <div className="h-auto flex flex-row flex-wrap justify-between gap-6 mt-2">
            {titles.map((title, index) => (

                <span className="h-[20px]"
                      key={index}
                      style={{
                          color: TEXT_COLORS.primary,
                          minWidth: title.width,
                          fontFamily: 'Cairo',
                          fontWeight: 700,
                          fontSize: '18px',
                          lineHeight: '100%',
                          letterSpacing: '3%',
                          textAlign:'center'
                      }}
                >
                        {title.name}
                    </span>
            ))}
        </div>
    )
}
export default TableHead

const titles = [
    {name: 'ID', width: '73px'},
    {name: 'تاريخ الدفع', width: '110px'},
    {name: 'نوع الإعلان', width: '140px'},
    {name: 'عدد الأيام', width: '140px'},
    {name: 'المبلغ', width: '110px'},
    {name: 'الحالة', width: '120px'},
    {name: '', width: '140px'},
];