﻿// <auto-generated />
using ImpactAPI.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace ImpactAPI.Migrations
{
    [DbContext(typeof(ImpactContext))]
    [Migration("20230104191516_SeedProducts")]
    partial class SeedProducts
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("ImpactAPI.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasPrecision(6, 2)
                        .HasColumnType("decimal(6,2)");

                    b.HasKey("Id");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Computador",
                            Price = 3000.57m
                        },
                        new
                        {
                            Id = 2,
                            Name = "Notebook",
                            Price = 4598.87m
                        },
                        new
                        {
                            Id = 3,
                            Name = "Webcam",
                            Price = 600m
                        },
                        new
                        {
                            Id = 4,
                            Name = "Microfone",
                            Price = 250m
                        },
                        new
                        {
                            Id = 5,
                            Name = "HeadSet",
                            Price = 200m
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
