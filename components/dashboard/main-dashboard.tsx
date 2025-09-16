import { WelcomeCard } from "@/components/dashboard/welcome-card"
import { RoomCard } from "@/components/dashboard/room-card"
import { DeviceCard } from "@/components/dashboard/device-card"
import { AirConditioning } from "@/components/dashboard/air-conditioning"
import { UsersWidget } from "@/components/dashboard/users"
import { ConsumptionChart } from "@/components/dashboard/consumption-chart"
import { Shortcuts } from "@/components/dashboard/shortcuts"
import { LightPanels } from "@/components/dashboard/light-panels"
import { Scenes } from "@/components/dashboard/scenes"
import EnergyWidget from "@/components/dashboard/energy-widget"

export function MainDashboard() {
  return (
    <div className="space-y-5">
      <WelcomeCard />

      <div className="grid gap-5 lg:grid-cols-3">
        {/* Left big column */}
        <div className="space-y-5 lg:col-span-2">
          {/* Rooms */}
          <section className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">Rooms</h2>
              <span className="text-[10px] text-muted-foreground">Master bed room ▾</span>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {["Living Room", "Kitchen", "Bed Room", "Bathroom", "Bed Room", "Bathroom"].map((r, i) => (
                <RoomCard key={i} title={r} />
              ))}
            </div>
          </section>

          {/* Popular Devices + Scenes */}
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-foreground">Popular Devices</h2>

              </div>
              <div className="grid grid-cols-2 gap-4">
                <DeviceCard title="Refrigerator" icon="fridge" />
                <DeviceCard title="Washer" icon="washer" />
                <DeviceCard title="Desktop PC" icon="pc" />
                <DeviceCard title="Air Conditioning" icon="ac" />
              </div>
            </div>
            <div className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-foreground">Scene</h2>

              </div>
              <Scenes />
            </div>
          </section>

          {/* New energy/temperature widget inspired by provided design */}
          <EnergyWidget />
        </div>

        {/* Right column */}
        <div className="space-y-5">
          <AirConditioning />
          <UsersWidget />
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ConsumptionChart />
        </div>
        <Shortcuts />
      </div>

      <LightPanels />
    </div>
  )
}
