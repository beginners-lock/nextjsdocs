interface Props {
    main: React.ReactNode
    notifications: React.ReactNode
}

export default function DashboardLayout({ main, notifications }: Props){
    return(
        <div className="flex flex-row gap-20">
            <div className="w-[65%]">
                {main}
            </div>

            <div className="w-[35%]">
                {notifications}
            </div>
        </div>
    )
}