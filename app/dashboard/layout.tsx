interface Props {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: Props){
    return(
        <div>
            Dashboard Layout
            {children}
        </div>
    )
}