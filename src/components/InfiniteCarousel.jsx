const InfiniteCarousel = ({ items, speed = 25 }) => {
  const renderIcon = (icon) => {
    if (!icon) return null;
    return <div className="w-12 h-12 flex items-center justify-center">{icon}</div>;
  }

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex gap-8 animate-infinite-scroll" style={{ animationDuration: `${speed}s` }}>
        {/* First set of items */}
        {items.map((item, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 w-48 h-32 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-3"
          >
            {renderIcon(item.icon)}
            <p className="text-sm font-semibold text-gray-300">{item.name}</p>
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {items.map((item, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 w-48 h-32 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-3"
          >
            {renderIcon(item.icon)}
            <p className="text-sm font-semibold text-gray-300">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfiniteCarousel
