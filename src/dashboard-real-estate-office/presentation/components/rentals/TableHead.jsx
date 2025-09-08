import {TEXT_COLORS} from "../../../../shared/colors.jsx";

const TableHead = () => {
    return (
        <div className="h-auto flex flex-row flex-wrap justify-between items-center gap-6">
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
                          textAlign: 'center'
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
    {name: 'صورة', width: '133px'},
    {name: 'تاريخ البداية', width: '110px'},
    {name: 'العنوان', width: '140px'},
    {name: 'المشتري', width: '140px'},
    {name: 'تاريخ النهاية', width: '110px'},
    {name: 'الحالة', width: '140px'}
];